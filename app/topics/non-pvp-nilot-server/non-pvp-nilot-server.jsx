import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-nilot-server');
}

export default function NonPvpNilotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-nilot-server" />;
}

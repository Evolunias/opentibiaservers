import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-realera-server');
}

export default function NonPvpRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-realera-server" />;
}

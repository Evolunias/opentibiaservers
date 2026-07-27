import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiara-server');
}

export default function NonPvpTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiara-server" />;
}

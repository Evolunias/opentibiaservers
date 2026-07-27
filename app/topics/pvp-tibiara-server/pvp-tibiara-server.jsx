import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiara-server');
}

export default function PvpTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiara-server" />;
}

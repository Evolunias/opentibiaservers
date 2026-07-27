import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibijka-server');
}

export default function PvpTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibijka-server" />;
}

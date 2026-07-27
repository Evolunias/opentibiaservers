import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibijka-server');
}

export default function NonPvpTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibijka-server" />;
}

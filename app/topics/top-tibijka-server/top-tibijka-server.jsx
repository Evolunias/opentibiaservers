import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-server');
}

export default function TopTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-server" />;
}

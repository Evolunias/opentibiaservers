import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-server');
}

export default function PopularTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-ot-server');
}

export default function PopularTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-ot-server" />;
}

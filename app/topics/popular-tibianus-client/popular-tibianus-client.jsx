import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-client');
}

export default function PopularTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-client" />;
}

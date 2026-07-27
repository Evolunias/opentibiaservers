import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-server');
}

export default function PopularTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-server" />;
}

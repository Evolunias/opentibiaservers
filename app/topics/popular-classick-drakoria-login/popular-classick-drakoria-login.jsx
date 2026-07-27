import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-login');
}

export default function PopularClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-login" />;
}

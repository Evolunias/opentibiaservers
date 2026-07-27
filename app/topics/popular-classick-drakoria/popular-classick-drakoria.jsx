import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria');
}

export default function PopularClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria" />;
}

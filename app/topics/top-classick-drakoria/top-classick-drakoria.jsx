import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria');
}

export default function TopClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria');
}

export default function FreshStartClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria" />;
}

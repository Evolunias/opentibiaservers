import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria');
}

export default function CurrentClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria" />;
}

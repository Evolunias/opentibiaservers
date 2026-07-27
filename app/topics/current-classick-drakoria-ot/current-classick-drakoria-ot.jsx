import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-ot');
}

export default function CurrentClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-ot" />;
}

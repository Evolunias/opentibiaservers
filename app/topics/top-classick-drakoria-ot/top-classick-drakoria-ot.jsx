import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-ot');
}

export default function TopClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-ot" />;
}

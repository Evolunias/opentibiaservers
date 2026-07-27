import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-ot');
}

export default function FreshStartClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-ot" />;
}

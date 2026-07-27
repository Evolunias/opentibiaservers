import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-ot');
}

export default function ActiveClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-ot" />;
}

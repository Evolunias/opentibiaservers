import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-ot');
}

export default function CustomClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-ot" />;
}

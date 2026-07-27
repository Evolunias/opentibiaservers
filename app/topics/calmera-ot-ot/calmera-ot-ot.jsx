import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-ot');
}

export default function CalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-ot" />;
}

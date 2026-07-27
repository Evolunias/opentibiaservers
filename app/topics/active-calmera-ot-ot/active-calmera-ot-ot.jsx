import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-ot');
}

export default function ActiveCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-ot" />;
}

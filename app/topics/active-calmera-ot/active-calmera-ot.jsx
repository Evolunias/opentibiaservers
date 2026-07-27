import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot');
}

export default function ActiveCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot" />;
}

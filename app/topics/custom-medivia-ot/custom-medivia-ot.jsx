import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-ot');
}

export default function CustomMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-ot" />;
}

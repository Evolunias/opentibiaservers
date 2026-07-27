import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-ot');
}

export default function TopMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-ot');
}

export default function ActiveMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-ot" />;
}

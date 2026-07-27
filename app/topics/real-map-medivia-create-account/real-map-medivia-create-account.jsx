import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-create-account');
}

export default function RealMapMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-create-account" />;
}

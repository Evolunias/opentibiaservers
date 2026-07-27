import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-create-account');
}

export default function RealMapSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-create-account" />;
}

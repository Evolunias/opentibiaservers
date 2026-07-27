import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-client');
}

export default function ActiveMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-client" />;
}

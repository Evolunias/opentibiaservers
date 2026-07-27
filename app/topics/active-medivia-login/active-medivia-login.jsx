import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-login');
}

export default function ActiveMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-login');
}

export default function CustomMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-login" />;
}

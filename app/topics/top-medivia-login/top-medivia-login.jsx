import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-login');
}

export default function TopMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-login" />;
}

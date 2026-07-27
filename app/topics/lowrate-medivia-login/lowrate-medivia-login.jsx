import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-login');
}

export default function LowrateMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-login" />;
}

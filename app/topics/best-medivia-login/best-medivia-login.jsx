import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-login');
}

export default function BestMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-login" />;
}

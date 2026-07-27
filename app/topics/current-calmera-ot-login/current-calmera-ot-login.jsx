import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-login');
}

export default function CurrentCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-login" />;
}

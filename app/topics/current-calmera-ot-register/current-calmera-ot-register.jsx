import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-register');
}

export default function CurrentCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-register" />;
}

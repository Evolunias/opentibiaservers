import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-register');
}

export default function CurrentMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-register" />;
}

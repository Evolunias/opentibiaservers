import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-register');
}

export default function LowrateMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-register" />;
}

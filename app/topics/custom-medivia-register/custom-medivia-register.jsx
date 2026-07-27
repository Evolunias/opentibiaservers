import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-register');
}

export default function CustomMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-register" />;
}

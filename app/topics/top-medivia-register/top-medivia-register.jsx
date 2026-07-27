import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-register');
}

export default function TopMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-register" />;
}

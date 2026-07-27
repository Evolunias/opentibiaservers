import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-register');
}

export default function ActiveMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-register" />;
}

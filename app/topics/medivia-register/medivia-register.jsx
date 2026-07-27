import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-register');
}

export default function MediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="medivia-register" />;
}

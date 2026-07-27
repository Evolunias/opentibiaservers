import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-register');
}

export default function NewMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-register" />;
}

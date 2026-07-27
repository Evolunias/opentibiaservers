import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-login');
}

export default function NewMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-login');
}

export default function MediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="medivia-login" />;
}

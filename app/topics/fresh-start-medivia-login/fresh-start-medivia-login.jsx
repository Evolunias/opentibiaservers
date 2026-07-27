import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-login');
}

export default function FreshStartMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-register');
}

export default function FreshStartMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-register" />;
}

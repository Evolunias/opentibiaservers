import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-mexico');
}

export default function MediviaNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-mexico" />;
}

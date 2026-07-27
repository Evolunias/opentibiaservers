import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-latin-america');
}

export default function MediviaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-latin-america" />;
}

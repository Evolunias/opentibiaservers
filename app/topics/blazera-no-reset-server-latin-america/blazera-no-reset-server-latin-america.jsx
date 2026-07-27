import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-no-reset-server-latin-america');
}

export default function BlazeraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-no-reset-server-latin-america" />;
}

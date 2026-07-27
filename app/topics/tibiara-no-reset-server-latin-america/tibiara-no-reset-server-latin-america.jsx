import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-latin-america');
}

export default function TibiaraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-latin-america" />;
}

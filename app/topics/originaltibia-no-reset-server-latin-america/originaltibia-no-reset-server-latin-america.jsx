import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-no-reset-server-latin-america');
}

export default function OriginaltibiaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-no-reset-server-latin-america" />;
}

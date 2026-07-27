import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-latin-america');
}

export default function OriginaltibiaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-latin-america" />;
}

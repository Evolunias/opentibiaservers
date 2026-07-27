import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-latin-america');
}

export default function OriginaltibiaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-latin-america" />;
}

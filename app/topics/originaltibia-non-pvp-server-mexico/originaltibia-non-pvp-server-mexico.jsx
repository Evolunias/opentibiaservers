import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-mexico');
}

export default function OriginaltibiaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-mexico" />;
}

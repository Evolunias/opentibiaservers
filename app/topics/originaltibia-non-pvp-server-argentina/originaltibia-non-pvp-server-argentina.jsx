import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-argentina');
}

export default function OriginaltibiaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-argentina" />;
}

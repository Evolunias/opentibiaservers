import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-usa');
}

export default function OriginaltibiaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-usa" />;
}

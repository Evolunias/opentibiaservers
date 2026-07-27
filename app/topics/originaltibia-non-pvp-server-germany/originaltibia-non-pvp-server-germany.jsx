import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-germany');
}

export default function OriginaltibiaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-germany" />;
}

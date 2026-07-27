import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-south-america');
}

export default function OriginaltibiaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-south-america');
}

export default function OriginaltibiaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-south-america" />;
}

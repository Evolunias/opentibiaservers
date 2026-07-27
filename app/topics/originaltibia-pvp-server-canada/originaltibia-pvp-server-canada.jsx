import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-canada');
}

export default function OriginaltibiaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-canada" />;
}

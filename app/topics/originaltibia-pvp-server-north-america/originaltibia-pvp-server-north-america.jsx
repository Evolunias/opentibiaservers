import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-north-america');
}

export default function OriginaltibiaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-north-america" />;
}

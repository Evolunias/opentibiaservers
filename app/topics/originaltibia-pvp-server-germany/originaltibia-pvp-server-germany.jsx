import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-germany');
}

export default function OriginaltibiaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-germany" />;
}

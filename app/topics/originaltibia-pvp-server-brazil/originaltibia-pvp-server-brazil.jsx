import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-brazil');
}

export default function OriginaltibiaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-brazil" />;
}

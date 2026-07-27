import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-argentina');
}

export default function OriginaltibiaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-usa');
}

export default function OriginaltibiaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-usa" />;
}

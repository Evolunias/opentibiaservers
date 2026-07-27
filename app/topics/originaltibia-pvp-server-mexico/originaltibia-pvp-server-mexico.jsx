import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-mexico');
}

export default function OriginaltibiaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-mexico" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-argentina');
}

export default function TibiaraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-argentina" />;
}

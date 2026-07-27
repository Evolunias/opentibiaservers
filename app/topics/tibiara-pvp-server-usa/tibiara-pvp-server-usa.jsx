import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-usa');
}

export default function TibiaraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-usa" />;
}

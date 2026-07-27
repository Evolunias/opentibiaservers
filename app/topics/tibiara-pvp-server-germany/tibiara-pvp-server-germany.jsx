import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-germany');
}

export default function TibiaraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-germany" />;
}

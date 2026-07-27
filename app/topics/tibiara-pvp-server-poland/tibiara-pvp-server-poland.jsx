import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-poland');
}

export default function TibiaraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-poland" />;
}

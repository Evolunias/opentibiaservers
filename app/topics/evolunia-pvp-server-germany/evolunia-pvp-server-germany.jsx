import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-germany');
}

export default function EvoluniaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-germany" />;
}

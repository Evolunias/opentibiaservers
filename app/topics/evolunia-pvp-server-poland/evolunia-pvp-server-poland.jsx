import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-poland');
}

export default function EvoluniaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-poland" />;
}

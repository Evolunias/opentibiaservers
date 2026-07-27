import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp');
}

export default function EvoluniaPvpKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp" />;
}

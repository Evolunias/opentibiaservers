import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-non-pvp-server');
}

export default function Evolunia76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-non-pvp-server" />;
}

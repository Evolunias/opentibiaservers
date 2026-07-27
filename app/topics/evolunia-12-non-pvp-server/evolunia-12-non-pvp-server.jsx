import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-non-pvp-server');
}

export default function Evolunia12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-non-pvp-server" />;
}

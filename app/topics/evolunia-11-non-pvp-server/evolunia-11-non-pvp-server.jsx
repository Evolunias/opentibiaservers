import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-non-pvp-server');
}

export default function Evolunia11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-non-pvp-server" />;
}

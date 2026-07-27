import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-non-pvp-server');
}

export default function Evolunia15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-non-pvp-server" />;
}

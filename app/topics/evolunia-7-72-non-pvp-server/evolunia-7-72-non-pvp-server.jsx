import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-non-pvp-server');
}

export default function Evolunia772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-non-pvp-server" />;
}

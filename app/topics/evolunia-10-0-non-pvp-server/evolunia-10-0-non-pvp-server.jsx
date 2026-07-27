import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-non-pvp-server');
}

export default function Evolunia100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-non-pvp-server" />;
}

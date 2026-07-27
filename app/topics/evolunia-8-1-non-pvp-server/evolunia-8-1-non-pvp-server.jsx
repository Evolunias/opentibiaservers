import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-non-pvp-server');
}

export default function Evolunia81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-non-pvp-server" />;
}

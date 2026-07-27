import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-non-pvp-server');
}

export default function Evolunia854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-non-pvp-server" />;
}

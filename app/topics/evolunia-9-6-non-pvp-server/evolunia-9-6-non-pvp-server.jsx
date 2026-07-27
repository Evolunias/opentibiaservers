import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-non-pvp-server');
}

export default function Evolunia96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-non-pvp-server" />;
}

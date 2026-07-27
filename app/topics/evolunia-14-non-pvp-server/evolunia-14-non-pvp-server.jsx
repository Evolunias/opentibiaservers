import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-non-pvp-server');
}

export default function Evolunia14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-non-pvp-server');
}

export default function Evolunia86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-non-pvp-server" />;
}

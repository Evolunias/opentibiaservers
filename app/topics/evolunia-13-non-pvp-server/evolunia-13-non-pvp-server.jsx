import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-non-pvp-server');
}

export default function Evolunia13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-non-pvp-server" />;
}

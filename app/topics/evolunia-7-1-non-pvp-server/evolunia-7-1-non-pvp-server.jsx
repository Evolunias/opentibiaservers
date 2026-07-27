import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-non-pvp-server');
}

export default function Evolunia71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-non-pvp-server" />;
}

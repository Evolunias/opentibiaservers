import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-non-pvp-server');
}

export default function Evolera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-non-pvp-server" />;
}

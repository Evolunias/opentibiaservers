import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-non-pvp-server');
}

export default function Arcaniarl100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-non-pvp-server" />;
}

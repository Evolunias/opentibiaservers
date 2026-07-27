import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-non-pvp-server');
}

export default function Arcaniarl81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-non-pvp-server" />;
}

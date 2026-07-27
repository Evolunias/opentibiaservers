import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-non-pvp-server');
}

export default function Arcaniarl86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-non-pvp-server" />;
}

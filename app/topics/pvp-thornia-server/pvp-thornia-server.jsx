import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-thornia-server');
}

export default function PvpThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-thornia-server" />;
}

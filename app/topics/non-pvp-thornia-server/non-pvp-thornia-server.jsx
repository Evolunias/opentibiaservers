import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-thornia-server');
}

export default function NonPvpThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-thornia-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-argentina');
}

export default function ThorniaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-germany');
}

export default function ThorniaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-germany" />;
}

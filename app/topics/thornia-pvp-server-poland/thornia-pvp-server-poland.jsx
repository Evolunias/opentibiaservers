import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-poland');
}

export default function ThorniaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-poland" />;
}

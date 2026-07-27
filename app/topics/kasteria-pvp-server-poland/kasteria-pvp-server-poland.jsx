import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-poland');
}

export default function KasteriaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-poland" />;
}

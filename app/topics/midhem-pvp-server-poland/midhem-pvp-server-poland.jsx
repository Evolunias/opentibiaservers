import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-poland');
}

export default function MidhemPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-poland" />;
}

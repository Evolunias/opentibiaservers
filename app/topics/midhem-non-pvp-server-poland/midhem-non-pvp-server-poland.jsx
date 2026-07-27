import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-poland');
}

export default function MidhemNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-poland" />;
}

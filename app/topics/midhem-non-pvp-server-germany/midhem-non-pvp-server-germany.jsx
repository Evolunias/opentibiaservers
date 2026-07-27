import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-germany');
}

export default function MidhemNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-germany" />;
}

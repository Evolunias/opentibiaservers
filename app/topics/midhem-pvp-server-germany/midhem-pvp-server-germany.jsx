import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-germany');
}

export default function MidhemPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-germany" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp');
}

export default function MidhemPvpKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-brazil');
}

export default function MidhemPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-brazil" />;
}

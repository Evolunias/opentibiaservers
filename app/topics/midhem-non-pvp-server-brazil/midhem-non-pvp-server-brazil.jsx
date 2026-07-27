import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-brazil');
}

export default function MidhemNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-brazil" />;
}

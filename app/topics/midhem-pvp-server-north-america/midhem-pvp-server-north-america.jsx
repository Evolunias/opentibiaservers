import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-north-america');
}

export default function MidhemPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-north-america" />;
}

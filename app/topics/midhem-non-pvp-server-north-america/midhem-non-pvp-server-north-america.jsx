import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-north-america');
}

export default function MidhemNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-north-america" />;
}

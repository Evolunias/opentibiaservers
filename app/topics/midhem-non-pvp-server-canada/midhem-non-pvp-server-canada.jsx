import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-canada');
}

export default function MidhemNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-canada" />;
}

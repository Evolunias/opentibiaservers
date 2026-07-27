import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-canada');
}

export default function MidhemPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-canada" />;
}

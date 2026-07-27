import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-canada');
}

export default function NonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-canada" />;
}

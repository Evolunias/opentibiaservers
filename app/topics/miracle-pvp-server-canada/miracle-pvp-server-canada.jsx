import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-canada');
}

export default function MiraclePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-canada" />;
}

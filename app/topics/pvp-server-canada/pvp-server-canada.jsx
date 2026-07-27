import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-canada');
}

export default function PvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-canada" />;
}

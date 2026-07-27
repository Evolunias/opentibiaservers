import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-canada');
}

export default function PvpOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-canada" />;
}

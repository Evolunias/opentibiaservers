import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-canada');
}

export default function NonPvpOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-canada" />;
}

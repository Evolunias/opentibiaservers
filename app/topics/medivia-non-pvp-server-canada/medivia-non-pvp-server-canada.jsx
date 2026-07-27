import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-canada');
}

export default function MediviaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-canada" />;
}

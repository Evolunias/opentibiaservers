import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-canada');
}

export default function MediviaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-canada" />;
}

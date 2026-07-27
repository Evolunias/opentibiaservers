import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-north-america');
}

export default function MediviaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-north-america" />;
}

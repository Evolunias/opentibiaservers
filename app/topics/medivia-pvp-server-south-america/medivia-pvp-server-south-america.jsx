import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-south-america');
}

export default function MediviaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-south-america" />;
}

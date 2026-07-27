import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-south-america');
}

export default function MediviaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-south-america" />;
}

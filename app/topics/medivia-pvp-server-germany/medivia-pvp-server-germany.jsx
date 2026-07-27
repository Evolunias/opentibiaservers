import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-germany');
}

export default function MediviaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-germany" />;
}

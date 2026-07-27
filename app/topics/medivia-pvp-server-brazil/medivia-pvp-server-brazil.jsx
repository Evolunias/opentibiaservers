import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-brazil');
}

export default function MediviaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-brazil" />;
}

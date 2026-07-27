import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-brazil');
}

export default function MediviaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-brazil" />;
}

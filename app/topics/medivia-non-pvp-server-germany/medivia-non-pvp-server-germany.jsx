import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-germany');
}

export default function MediviaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-germany" />;
}

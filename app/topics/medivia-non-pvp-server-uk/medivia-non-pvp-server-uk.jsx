import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-uk');
}

export default function MediviaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-uk" />;
}

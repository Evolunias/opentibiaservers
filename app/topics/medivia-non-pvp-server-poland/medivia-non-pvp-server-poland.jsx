import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-poland');
}

export default function MediviaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-poland" />;
}

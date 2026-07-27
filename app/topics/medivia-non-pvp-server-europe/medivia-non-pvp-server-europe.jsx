import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-non-pvp-server-europe');
}

export default function MediviaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-non-pvp-server-europe" />;
}

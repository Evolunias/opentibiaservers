import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-uk');
}

export default function MediviaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-uk" />;
}

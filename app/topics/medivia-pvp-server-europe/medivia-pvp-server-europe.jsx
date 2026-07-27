import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-europe');
}

export default function MediviaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-europe" />;
}

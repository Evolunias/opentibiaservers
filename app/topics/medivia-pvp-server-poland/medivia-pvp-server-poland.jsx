import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-poland');
}

export default function MediviaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-poland" />;
}

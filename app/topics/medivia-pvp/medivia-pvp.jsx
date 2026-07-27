import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp');
}

export default function MediviaPvpKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp" />;
}

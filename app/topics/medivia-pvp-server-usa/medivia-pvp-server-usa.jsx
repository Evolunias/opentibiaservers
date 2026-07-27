import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-usa');
}

export default function MediviaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-usa" />;
}

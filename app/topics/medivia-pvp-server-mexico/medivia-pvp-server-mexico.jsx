import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-mexico');
}

export default function MediviaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-mexico" />;
}

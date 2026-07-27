import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-server-argentina');
}

export default function MediviaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-france');
}

export default function MediviaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-france" />;
}

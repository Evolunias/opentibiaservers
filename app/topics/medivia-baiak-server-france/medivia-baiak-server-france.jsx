import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-france');
}

export default function MediviaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-france" />;
}

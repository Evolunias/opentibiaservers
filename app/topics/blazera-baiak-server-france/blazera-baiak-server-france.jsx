import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-france');
}

export default function BlazeraBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-france');
}

export default function TibiaraBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-france" />;
}

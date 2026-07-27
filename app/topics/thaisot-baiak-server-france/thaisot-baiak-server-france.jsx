import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-france');
}

export default function ThaisotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-france" />;
}

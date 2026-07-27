import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-france');
}

export default function NostaltherBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-france" />;
}

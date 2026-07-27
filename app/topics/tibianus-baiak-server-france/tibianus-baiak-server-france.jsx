import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-france');
}

export default function TibianusBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-france');
}

export default function TibiantisBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-france" />;
}

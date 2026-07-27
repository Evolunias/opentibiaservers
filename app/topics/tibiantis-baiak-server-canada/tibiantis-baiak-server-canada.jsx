import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-canada');
}

export default function TibiantisBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-canada" />;
}

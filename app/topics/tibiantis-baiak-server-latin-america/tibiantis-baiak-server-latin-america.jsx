import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-latin-america');
}

export default function TibiantisBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-latin-america" />;
}

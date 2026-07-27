import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-north-america');
}

export default function TibiantisBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-north-america" />;
}

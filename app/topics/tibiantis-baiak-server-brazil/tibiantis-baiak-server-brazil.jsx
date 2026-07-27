import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-brazil');
}

export default function TibiantisBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-brazil" />;
}

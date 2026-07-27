import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-uk');
}

export default function TibiantisBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-uk" />;
}

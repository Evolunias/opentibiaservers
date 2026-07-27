import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-europe');
}

export default function TibiantisBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-europe" />;
}

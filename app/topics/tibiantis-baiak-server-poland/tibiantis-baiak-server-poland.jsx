import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-poland');
}

export default function TibiantisBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-poland" />;
}

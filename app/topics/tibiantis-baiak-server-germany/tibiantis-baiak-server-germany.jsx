import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-germany');
}

export default function TibiantisBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-germany" />;
}

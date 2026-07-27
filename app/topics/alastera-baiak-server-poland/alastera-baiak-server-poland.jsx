import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-poland');
}

export default function AlasteraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-poland" />;
}

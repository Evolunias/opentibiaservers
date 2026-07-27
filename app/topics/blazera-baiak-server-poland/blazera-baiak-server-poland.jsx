import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-poland');
}

export default function BlazeraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-poland" />;
}

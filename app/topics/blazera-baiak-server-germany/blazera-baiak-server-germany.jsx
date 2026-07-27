import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-germany');
}

export default function BlazeraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-germany" />;
}

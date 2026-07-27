import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-europe');
}

export default function BlazeraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-uk');
}

export default function BlazeraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-uk" />;
}

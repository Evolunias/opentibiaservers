import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-brazil');
}

export default function BlazeraBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-brazil" />;
}

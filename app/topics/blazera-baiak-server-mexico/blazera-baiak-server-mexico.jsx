import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-mexico');
}

export default function BlazeraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-mexico" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-argentina');
}

export default function BlazeraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-argentina" />;
}

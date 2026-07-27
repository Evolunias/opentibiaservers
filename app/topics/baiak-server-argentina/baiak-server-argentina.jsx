import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-argentina');
}

export default function BaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-argentina');
}

export default function BaiakServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-argentina" />;
}

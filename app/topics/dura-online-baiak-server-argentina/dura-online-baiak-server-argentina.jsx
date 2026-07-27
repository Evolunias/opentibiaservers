import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-argentina');
}

export default function DuraOnlineBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-argentina" />;
}

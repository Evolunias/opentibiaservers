import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-baiak-server');
}

export default function DuraOnline86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-baiak-server" />;
}

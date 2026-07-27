import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-baiak-server');
}

export default function DuraOnline11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-baiak-server" />;
}

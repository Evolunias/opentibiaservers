import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-baiak-server');
}

export default function DuraOnline74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-baiak-server" />;
}

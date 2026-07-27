import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-baiak-server');
}

export default function DuraOnline96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-baiak-server" />;
}

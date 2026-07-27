import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-1-baiak-server');
}

export default function DuraOnline81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-1-baiak-server" />;
}

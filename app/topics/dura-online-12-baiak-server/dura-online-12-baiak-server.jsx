import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-baiak-server');
}

export default function DuraOnline12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-baiak-server" />;
}

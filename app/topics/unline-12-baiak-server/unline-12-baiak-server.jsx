import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-baiak-server');
}

export default function Unline12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-baiak-server');
}

export default function Unline15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-baiak-server" />;
}

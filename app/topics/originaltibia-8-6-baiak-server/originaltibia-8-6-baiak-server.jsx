import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-baiak-server');
}

export default function Originaltibia86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-baiak-server" />;
}

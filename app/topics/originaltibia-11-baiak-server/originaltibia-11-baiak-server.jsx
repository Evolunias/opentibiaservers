import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-baiak-server');
}

export default function Originaltibia11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-baiak-server" />;
}

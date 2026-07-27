import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-baiak-server');
}

export default function Originaltibia1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-baiak-server');
}

export default function Originaltibia772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-baiak-server" />;
}

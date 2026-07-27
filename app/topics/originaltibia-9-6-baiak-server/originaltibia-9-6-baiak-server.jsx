import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-baiak-server');
}

export default function Originaltibia96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-baiak-server" />;
}

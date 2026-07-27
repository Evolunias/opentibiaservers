import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-baiak-server');
}

export default function Originaltibia84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-baiak-server" />;
}

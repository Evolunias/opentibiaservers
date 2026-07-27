import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-baiak-server');
}

export default function Originaltibia81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-baiak-server" />;
}

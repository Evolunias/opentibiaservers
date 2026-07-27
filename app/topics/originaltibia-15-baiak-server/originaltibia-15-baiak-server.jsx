import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-baiak-server');
}

export default function Originaltibia15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-baiak-server" />;
}

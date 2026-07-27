import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-baiak-server');
}

export default function Originaltibia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-baiak-server');
}

export default function Sabrehaven76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-baiak-server" />;
}

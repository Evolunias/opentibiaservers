import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-baiak-server');
}

export default function Sabrehaven74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-baiak-server" />;
}

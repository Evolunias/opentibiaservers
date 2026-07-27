import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-baiak-server');
}

export default function Sabrehaven71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-baiak-server" />;
}

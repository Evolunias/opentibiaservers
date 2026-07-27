import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-baiak-server');
}

export default function Sabrehaven81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-baiak-server" />;
}

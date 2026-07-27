import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-baiak-server');
}

export default function Sabrehaven80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-baiak-server" />;
}

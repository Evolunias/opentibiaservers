import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-baiak-server');
}

export default function Sabrehaven12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-baiak-server');
}

export default function Sabrehaven11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-baiak-server" />;
}

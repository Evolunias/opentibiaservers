import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-baiak-server');
}

export default function Sabrehaven86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-baiak-server" />;
}

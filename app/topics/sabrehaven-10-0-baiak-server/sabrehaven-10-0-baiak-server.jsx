import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-baiak-server');
}

export default function Sabrehaven100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-baiak-server" />;
}

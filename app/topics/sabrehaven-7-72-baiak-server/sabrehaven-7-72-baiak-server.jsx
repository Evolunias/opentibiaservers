import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-baiak-server');
}

export default function Sabrehaven772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-baiak-server" />;
}

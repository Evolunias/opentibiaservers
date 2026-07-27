import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-baiak-server');
}

export default function Sabrehaven96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-baiak-server');
}

export default function Sabrehaven13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-baiak-server" />;
}

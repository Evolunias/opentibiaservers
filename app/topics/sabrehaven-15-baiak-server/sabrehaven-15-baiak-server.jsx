import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-baiak-server');
}

export default function Sabrehaven15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-baiak-server" />;
}

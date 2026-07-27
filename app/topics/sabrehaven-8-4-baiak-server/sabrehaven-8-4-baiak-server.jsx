import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-baiak-server');
}

export default function Sabrehaven84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-baiak-server" />;
}

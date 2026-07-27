import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-baiak-server');
}

export default function Blazera11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-baiak-server" />;
}

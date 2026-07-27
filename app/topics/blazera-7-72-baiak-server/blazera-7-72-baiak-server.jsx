import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-baiak-server');
}

export default function Blazera772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-baiak-server" />;
}

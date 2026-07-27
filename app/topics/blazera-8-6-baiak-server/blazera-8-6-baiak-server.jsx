import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-baiak-server');
}

export default function Blazera86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-baiak-server" />;
}

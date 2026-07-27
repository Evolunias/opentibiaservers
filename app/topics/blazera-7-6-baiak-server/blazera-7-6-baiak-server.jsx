import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-baiak-server');
}

export default function Blazera76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-baiak-server" />;
}

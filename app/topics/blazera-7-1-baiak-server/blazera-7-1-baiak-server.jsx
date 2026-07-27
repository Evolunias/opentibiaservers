import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-baiak-server');
}

export default function Blazera71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-baiak-server" />;
}

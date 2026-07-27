import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-baiak-server');
}

export default function Blazera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-baiak-server" />;
}

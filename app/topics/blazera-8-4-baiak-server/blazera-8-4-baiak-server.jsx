import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-baiak-server');
}

export default function Blazera84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-baiak-server" />;
}

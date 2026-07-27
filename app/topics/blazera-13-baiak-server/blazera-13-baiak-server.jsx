import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-baiak-server');
}

export default function Blazera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-baiak-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-baiak-server');
}

export default function Blazera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-baiak-server" />;
}

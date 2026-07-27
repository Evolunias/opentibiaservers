import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-baiak-server');
}

export default function Blazera1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-baiak-server" />;
}

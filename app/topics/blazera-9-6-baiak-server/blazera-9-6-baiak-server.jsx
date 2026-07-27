import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-baiak-server');
}

export default function Blazera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-baiak-server" />;
}

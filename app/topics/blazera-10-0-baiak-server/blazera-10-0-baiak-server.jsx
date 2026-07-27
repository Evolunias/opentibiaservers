import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-baiak-server');
}

export default function Blazera100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-baiak-server" />;
}

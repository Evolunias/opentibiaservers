import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-baiak-server');
}

export default function Saintsot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-baiak-server" />;
}

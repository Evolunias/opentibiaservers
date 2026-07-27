import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-baiak-server');
}

export default function Saintsot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-baiak-server" />;
}

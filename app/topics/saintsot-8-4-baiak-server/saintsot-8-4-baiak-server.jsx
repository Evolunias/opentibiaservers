import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-baiak-server');
}

export default function Saintsot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-baiak-server" />;
}

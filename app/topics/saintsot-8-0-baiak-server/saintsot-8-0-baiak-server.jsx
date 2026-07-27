import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-baiak-server');
}

export default function Saintsot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-baiak-server" />;
}

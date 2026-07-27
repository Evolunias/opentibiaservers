import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-baiak-server');
}

export default function Saintsot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-baiak-server" />;
}

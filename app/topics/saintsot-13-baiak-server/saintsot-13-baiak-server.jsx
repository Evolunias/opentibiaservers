import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-baiak-server');
}

export default function Saintsot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-baiak-server" />;
}

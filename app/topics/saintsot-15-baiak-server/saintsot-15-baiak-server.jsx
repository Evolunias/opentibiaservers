import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-baiak-server');
}

export default function Saintsot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-baiak-server" />;
}

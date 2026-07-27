import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-baiak-server');
}

export default function Saintsot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-baiak-server" />;
}

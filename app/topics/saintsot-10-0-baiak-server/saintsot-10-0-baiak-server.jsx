import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-baiak-server');
}

export default function Saintsot100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-baiak-server" />;
}

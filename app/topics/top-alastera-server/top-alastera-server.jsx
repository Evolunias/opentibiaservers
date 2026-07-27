import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-server');
}

export default function TopAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-server" />;
}

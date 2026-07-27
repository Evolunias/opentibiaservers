import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-server');
}

export default function FreshStartAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-server" />;
}

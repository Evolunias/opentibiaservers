import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-private-server');
}

export default function FreshStartAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-private-server" />;
}

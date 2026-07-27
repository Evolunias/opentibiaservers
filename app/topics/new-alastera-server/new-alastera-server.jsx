import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-server');
}

export default function NewAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-server" />;
}

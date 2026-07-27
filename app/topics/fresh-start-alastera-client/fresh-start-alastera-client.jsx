import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-client');
}

export default function FreshStartAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-client" />;
}

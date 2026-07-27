import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-client');
}

export default function TopAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-client" />;
}

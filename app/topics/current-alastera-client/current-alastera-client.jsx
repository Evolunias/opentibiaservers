import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-client');
}

export default function CurrentAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-client" />;
}

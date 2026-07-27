import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-client');
}

export default function AlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="alastera-client" />;
}

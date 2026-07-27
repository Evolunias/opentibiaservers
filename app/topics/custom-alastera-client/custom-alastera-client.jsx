import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-client');
}

export default function CustomAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-client" />;
}

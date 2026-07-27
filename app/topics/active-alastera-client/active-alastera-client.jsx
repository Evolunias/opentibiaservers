import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-client');
}

export default function ActiveAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-client" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-client');
}

export default function NewAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-client" />;
}

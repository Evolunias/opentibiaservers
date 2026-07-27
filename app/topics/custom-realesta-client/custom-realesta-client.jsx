import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-client');
}

export default function CustomRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-client" />;
}

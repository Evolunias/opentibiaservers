import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-client');
}

export default function CustomRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-client" />;
}

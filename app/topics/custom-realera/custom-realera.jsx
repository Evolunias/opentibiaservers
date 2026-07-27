import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera');
}

export default function CustomRealeraKeywordPage() {
  return <StaticKeywordPage slug="custom-realera" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-status');
}

export default function TibijkaStatusKeywordPage() {
  return <StaticKeywordPage slug="tibijka-status" />;
}

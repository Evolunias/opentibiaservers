import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera');
}

export default function NewRealeraKeywordPage() {
  return <StaticKeywordPage slug="new-realera" />;
}

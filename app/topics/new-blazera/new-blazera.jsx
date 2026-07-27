import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera');
}

export default function NewBlazeraKeywordPage() {
  return <StaticKeywordPage slug="new-blazera" />;
}

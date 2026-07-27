import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera');
}

export default function TopBlazeraKeywordPage() {
  return <StaticKeywordPage slug="top-blazera" />;
}

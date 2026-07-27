import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera');
}

export default function ActiveBlazeraKeywordPage() {
  return <StaticKeywordPage slug="active-blazera" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera');
}

export default function CustomBlazeraKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera" />;
}

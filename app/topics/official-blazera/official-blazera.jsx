import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera');
}

export default function OfficialBlazeraKeywordPage() {
  return <StaticKeywordPage slug="official-blazera" />;
}

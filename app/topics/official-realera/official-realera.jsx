import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera');
}

export default function OfficialRealeraKeywordPage() {
  return <StaticKeywordPage slug="official-realera" />;
}

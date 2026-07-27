import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera');
}

export default function RealeraKeywordPage() {
  return <StaticKeywordPage slug="realera" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara');
}

export default function CurrentTibiaraKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara" />;
}

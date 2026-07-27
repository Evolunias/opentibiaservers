import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara');
}

export default function LowrateTibiaraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara" />;
}

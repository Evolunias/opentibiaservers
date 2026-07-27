import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara');
}

export default function FreshStartTibiaraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara" />;
}

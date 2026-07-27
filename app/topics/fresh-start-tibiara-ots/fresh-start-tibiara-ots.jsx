import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-ots');
}

export default function FreshStartTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-ots" />;
}

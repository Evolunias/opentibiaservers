import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-ot');
}

export default function FreshStartTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-open-tibia');
}

export default function FreshStartTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-open-tibia" />;
}

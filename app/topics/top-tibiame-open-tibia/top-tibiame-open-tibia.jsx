import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-open-tibia');
}

export default function TopTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-open-tibia" />;
}

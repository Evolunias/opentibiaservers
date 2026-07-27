import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-open-tibia');
}

export default function LowrateTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-open-tibia');
}

export default function CurrentTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-open-tibia" />;
}

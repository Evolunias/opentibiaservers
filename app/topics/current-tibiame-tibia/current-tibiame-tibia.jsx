import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-tibia');
}

export default function CurrentTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-tibia" />;
}

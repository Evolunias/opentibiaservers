import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-tibia');
}

export default function LowrateTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-tibia" />;
}

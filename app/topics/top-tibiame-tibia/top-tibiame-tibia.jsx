import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-tibia');
}

export default function TopTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-tibia" />;
}

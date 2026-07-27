import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-tibia');
}

export default function FreshStartTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-tibia" />;
}

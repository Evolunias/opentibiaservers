import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-tibia');
}

export default function TibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-tibia');
}

export default function CustomTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-tibia" />;
}

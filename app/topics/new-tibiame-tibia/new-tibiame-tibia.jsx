import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-tibia');
}

export default function NewTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-tibia" />;
}

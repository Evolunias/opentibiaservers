import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-tibia');
}

export default function OfficialTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-tibia" />;
}

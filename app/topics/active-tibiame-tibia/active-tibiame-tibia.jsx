import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-tibia');
}

export default function ActiveTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-tibia" />;
}

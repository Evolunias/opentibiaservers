import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-tibia');
}

export default function OfficialTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-tibia" />;
}

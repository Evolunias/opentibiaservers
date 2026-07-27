import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-tibia');
}

export default function TopTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-tibia" />;
}

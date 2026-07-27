import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-tibia');
}

export default function LowrateTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-tibia" />;
}

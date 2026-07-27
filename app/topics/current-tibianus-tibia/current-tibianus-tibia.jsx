import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-tibia');
}

export default function CurrentTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-tibia');
}

export default function CustomTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-tibia" />;
}

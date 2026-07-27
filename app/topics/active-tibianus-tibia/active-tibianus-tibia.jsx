import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-tibia');
}

export default function ActiveTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-tibia" />;
}

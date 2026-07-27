import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-tibia');
}

export default function NewTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-tibia" />;
}

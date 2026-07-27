import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-tibia');
}

export default function FreshStartTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-tibia" />;
}

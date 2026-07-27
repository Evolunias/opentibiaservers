import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-tibia');
}

export default function TibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-tibia" />;
}

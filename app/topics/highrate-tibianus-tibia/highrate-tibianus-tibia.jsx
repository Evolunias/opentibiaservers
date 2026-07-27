import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-tibia');
}

export default function HighrateTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-tibia" />;
}

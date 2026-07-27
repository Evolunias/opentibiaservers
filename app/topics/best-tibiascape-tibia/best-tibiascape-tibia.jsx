import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-tibia');
}

export default function BestTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-tibia" />;
}

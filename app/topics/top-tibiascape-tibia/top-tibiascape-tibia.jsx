import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-tibia');
}

export default function TopTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-tibia" />;
}

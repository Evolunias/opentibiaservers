import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-tibia');
}

export default function PopularTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-tibia');
}

export default function LowrateTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-tibia" />;
}

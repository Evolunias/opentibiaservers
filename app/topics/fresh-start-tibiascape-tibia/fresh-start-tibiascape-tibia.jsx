import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-tibia');
}

export default function FreshStartTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-tibia" />;
}

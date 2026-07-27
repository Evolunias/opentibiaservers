import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-tibia');
}

export default function NewTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-tibia" />;
}

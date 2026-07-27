import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-tibia');
}

export default function NewTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-tibia" />;
}

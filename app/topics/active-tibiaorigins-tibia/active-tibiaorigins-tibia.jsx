import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-tibia');
}

export default function ActiveTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-tibia" />;
}

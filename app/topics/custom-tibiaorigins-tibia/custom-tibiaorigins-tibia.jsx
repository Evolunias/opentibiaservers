import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-tibia');
}

export default function CustomTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-tibia" />;
}

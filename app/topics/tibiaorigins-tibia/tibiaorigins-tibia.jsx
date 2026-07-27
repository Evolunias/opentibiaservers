import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-tibia');
}

export default function TibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-tibia" />;
}

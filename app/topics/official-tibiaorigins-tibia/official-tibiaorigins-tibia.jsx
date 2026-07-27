import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-tibia');
}

export default function OfficialTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-tibia" />;
}

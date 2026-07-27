import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-tibia');
}

export default function NoResetTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-tibia" />;
}

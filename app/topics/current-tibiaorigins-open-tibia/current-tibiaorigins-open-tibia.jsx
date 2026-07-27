import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-open-tibia');
}

export default function CurrentTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-open-tibia" />;
}

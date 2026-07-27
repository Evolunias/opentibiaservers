import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-open-tibia');
}

export default function LowrateTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-open-tibia');
}

export default function FreshStartTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-open-tibia" />;
}

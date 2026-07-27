import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-open-tibia');
}

export default function BestTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-open-tibia');
}

export default function PopularTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-open-tibia" />;
}

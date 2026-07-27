import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-open-tibia');
}

export default function TopTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-open-tibia" />;
}

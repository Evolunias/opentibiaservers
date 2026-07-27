import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-open-tibia');
}

export default function ActiveTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-open-tibia" />;
}

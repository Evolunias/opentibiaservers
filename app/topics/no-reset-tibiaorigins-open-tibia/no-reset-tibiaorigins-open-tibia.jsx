import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-open-tibia');
}

export default function NoResetTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-open-tibia" />;
}

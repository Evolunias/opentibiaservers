import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-tibia');
}

export default function NoResetMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-tibia" />;
}

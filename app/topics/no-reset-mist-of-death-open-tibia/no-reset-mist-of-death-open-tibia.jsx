import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-open-tibia');
}

export default function NoResetMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-open-tibia" />;
}

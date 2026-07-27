import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-open-tibia');
}

export default function NoResetClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-open-tibia" />;
}

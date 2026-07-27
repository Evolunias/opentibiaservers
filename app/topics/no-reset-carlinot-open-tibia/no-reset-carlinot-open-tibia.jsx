import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-open-tibia');
}

export default function NoResetCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-open-tibia" />;
}

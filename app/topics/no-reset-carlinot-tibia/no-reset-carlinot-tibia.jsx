import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-tibia');
}

export default function NoResetCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-tibia" />;
}

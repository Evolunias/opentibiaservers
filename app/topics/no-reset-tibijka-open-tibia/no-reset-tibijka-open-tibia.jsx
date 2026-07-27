import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-open-tibia');
}

export default function NoResetTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-open-tibia" />;
}

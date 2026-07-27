import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-open-tibia');
}

export default function NoResetTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-open-tibia" />;
}

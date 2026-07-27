import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-tibia');
}

export default function NoResetTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-tibia');
}

export default function NoResetOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-tibia" />;
}

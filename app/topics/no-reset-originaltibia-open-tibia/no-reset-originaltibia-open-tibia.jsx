import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-open-tibia');
}

export default function NoResetOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-open-tibia" />;
}

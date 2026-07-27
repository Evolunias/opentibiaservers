import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-tibia');
}

export default function NoResetRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-tibia" />;
}

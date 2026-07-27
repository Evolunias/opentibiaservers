import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-tibia');
}

export default function NoResetRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-tibia" />;
}

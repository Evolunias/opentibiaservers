import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-tibia');
}

export default function NoResetMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-tibia" />;
}

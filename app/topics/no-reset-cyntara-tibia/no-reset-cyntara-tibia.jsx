import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-tibia');
}

export default function NoResetCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-tibia" />;
}

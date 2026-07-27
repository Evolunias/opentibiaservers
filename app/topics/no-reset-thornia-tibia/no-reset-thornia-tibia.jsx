import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-tibia');
}

export default function NoResetThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-tibia" />;
}

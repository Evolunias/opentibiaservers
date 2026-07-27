import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-open-tibia');
}

export default function NoResetThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-tibia');
}

export default function NoResetNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-tibia" />;
}

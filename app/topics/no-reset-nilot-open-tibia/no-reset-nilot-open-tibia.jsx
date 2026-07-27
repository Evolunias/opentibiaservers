import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-open-tibia');
}

export default function NoResetNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-open-tibia" />;
}

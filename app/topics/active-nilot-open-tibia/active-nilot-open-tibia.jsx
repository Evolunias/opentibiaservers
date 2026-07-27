import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-open-tibia');
}

export default function ActiveNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-open-tibia" />;
}

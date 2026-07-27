import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-open-tibia');
}

export default function CustomNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-open-tibia" />;
}

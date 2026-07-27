import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-tibia');
}

export default function CustomNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-tibia" />;
}

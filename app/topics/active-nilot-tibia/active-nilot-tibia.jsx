import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-tibia');
}

export default function ActiveNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-tibia" />;
}

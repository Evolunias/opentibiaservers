import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-open-tibia');
}

export default function TibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-open-tibia" />;
}

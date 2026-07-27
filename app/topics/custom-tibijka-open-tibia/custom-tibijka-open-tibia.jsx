import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-open-tibia');
}

export default function CustomTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-open-tibia" />;
}

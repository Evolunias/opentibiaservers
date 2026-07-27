import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-open-tibia');
}

export default function ActiveTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-open-tibia');
}

export default function CustomTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-tibia');
}

export default function CustomTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-tibia" />;
}

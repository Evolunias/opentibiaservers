import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-tibia');
}

export default function TopTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-tibia" />;
}

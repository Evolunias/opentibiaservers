import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-tibia');
}

export default function TopOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-tibia" />;
}

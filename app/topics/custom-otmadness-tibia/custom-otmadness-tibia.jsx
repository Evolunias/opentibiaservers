import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-tibia');
}

export default function CustomOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-tibia" />;
}

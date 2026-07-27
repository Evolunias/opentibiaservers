import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-tibia');
}

export default function CurrentOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-tibia" />;
}

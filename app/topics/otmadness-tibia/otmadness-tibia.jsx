import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-tibia');
}

export default function OtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-tibia" />;
}

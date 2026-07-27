import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-tibia');
}

export default function OfficialOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-tibia" />;
}

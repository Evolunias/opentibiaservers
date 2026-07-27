import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-tibia');
}

export default function ActiveOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-tibia" />;
}

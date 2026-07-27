import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-tibia');
}

export default function FreshStartOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-tibia" />;
}

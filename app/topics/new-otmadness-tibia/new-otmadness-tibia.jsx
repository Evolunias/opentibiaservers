import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-tibia');
}

export default function NewOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-tibia" />;
}

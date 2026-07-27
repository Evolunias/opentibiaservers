import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-tibia');
}

export default function BestOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-tibia" />;
}

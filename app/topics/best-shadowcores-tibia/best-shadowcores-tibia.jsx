import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-tibia');
}

export default function BestShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-tibia" />;
}

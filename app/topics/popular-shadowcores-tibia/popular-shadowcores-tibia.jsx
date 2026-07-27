import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-tibia');
}

export default function PopularShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-tibia" />;
}

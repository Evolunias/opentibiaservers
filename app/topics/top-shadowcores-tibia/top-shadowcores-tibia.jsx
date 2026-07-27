import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-tibia');
}

export default function TopShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-tibia" />;
}

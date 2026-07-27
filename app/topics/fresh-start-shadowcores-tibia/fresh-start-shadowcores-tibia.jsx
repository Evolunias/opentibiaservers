import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-tibia');
}

export default function FreshStartShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-tibia" />;
}

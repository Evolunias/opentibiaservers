import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-tibia');
}

export default function CurrentShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-tibia" />;
}

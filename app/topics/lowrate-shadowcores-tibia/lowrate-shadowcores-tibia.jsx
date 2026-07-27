import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-tibia');
}

export default function LowrateShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-tibia" />;
}

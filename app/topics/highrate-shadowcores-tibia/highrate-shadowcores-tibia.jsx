import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-tibia');
}

export default function HighrateShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-tibia" />;
}

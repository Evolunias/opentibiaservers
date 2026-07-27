import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-tibia');
}

export default function OfficialShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-tibia" />;
}

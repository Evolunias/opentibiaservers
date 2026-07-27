import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-tibia');
}

export default function CustomShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-tibia" />;
}

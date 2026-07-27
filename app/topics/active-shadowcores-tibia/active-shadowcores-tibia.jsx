import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-tibia');
}

export default function ActiveShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-tibia');
}

export default function NewShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-tibia" />;
}

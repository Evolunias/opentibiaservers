import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-tibia');
}

export default function ShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-tibia" />;
}

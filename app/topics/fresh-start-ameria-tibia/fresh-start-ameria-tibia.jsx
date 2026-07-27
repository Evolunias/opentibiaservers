import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-tibia');
}

export default function FreshStartAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-tibia" />;
}

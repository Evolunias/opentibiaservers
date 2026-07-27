import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-tibia');
}

export default function FreshStartKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-tibia" />;
}

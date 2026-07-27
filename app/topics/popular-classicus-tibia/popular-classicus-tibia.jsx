import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-tibia');
}

export default function PopularClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-tibia" />;
}

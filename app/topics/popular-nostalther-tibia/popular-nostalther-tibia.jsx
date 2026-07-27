import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-tibia');
}

export default function PopularNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-tibia" />;
}

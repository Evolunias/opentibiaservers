import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-open-tibia');
}

export default function PopularNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-open-tibia" />;
}

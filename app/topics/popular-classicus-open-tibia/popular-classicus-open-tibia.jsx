import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-open-tibia');
}

export default function PopularClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-open-tibia" />;
}

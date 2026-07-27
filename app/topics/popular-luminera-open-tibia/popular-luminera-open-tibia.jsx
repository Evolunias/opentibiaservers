import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-open-tibia');
}

export default function PopularLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-open-tibia" />;
}

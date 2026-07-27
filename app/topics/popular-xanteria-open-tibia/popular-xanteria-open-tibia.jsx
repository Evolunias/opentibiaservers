import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-open-tibia');
}

export default function PopularXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-open-tibia" />;
}

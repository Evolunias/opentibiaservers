import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-tibia');
}

export default function PopularXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-tibia" />;
}

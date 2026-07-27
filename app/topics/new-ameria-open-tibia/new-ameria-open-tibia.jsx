import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-open-tibia');
}

export default function NewAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-open-tibia" />;
}

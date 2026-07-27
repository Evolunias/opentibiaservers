import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-tibia');
}

export default function NewAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-tibia" />;
}

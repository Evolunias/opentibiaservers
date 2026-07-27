import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-tibia');
}

export default function TopAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-tibia" />;
}

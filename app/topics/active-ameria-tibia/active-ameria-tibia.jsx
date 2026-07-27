import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-tibia');
}

export default function ActiveAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-tibia" />;
}

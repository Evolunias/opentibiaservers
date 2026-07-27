import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-tibia');
}

export default function CustomAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-tibia');
}

export default function TitaniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="titania-tibia" />;
}

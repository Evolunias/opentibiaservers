import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-tibia-world');
}

export default function TitaniaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="titania-tibia-world" />;
}

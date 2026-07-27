import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-tibia');
}

export default function CustomOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-tibia" />;
}

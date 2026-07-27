import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-tibia');
}

export default function TopOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-tibia" />;
}

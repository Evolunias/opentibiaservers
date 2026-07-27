import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-tibia-world');
}

export default function FideraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="fidera-tibia-world" />;
}

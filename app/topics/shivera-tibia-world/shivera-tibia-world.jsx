import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-tibia-world');
}

export default function ShiveraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="shivera-tibia-world" />;
}

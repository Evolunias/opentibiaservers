import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-tibia-world');
}

export default function LuceraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="lucera-tibia-world" />;
}

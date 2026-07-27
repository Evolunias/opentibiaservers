import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-tibia-world');
}

export default function SoleraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="solera-tibia-world" />;
}

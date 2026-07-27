import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-tibia-world');
}

export default function RuberaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="rubera-tibia-world" />;
}

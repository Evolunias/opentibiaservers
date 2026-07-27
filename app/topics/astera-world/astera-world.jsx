import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-world');
}

export default function AsteraWorldKeywordPage() {
  return <StaticKeywordPage slug="astera-world" />;
}

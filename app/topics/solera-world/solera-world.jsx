import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-world');
}

export default function SoleraWorldKeywordPage() {
  return <StaticKeywordPage slug="solera-world" />;
}

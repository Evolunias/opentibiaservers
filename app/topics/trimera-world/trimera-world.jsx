import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-world');
}

export default function TrimeraWorldKeywordPage() {
  return <StaticKeywordPage slug="trimera-world" />;
}

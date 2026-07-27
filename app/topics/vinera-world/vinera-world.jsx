import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-world');
}

export default function VineraWorldKeywordPage() {
  return <StaticKeywordPage slug="vinera-world" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-world');
}

export default function LumineraWorldKeywordPage() {
  return <StaticKeywordPage slug="luminera-world" />;
}

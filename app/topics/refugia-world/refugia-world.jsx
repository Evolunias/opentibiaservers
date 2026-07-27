import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-world');
}

export default function RefugiaWorldKeywordPage() {
  return <StaticKeywordPage slug="refugia-world" />;
}

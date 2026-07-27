import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-world');
}

export default function HoneraWorldKeywordPage() {
  return <StaticKeywordPage slug="honera-world" />;
}

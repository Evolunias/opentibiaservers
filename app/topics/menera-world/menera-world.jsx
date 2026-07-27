import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-world');
}

export default function MeneraWorldKeywordPage() {
  return <StaticKeywordPage slug="menera-world" />;
}

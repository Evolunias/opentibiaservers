import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-world');
}

export default function LuceraWorldKeywordPage() {
  return <StaticKeywordPage slug="lucera-world" />;
}

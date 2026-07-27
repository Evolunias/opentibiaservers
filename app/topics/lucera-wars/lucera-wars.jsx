import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-wars');
}

export default function LuceraWarsKeywordPage() {
  return <StaticKeywordPage slug="lucera-wars" />;
}

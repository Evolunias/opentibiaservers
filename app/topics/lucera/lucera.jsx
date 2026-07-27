import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera');
}

export default function LuceraKeywordPage() {
  return <StaticKeywordPage slug="lucera" />;
}

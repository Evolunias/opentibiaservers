import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-server');
}

export default function LuceraServerKeywordPage() {
  return <StaticKeywordPage slug="lucera-server" />;
}

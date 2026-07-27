import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-mexico-server');
}

export default function ShadowcoresMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-mexico-server" />;
}

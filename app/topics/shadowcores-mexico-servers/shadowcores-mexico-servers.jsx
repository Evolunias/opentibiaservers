import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-mexico-servers');
}

export default function ShadowcoresMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-mexico-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-mexico-server');
}

export default function AlasteraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-mexico-server" />;
}

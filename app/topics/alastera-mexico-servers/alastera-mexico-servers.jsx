import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-mexico-servers');
}

export default function AlasteraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-mexico-servers" />;
}

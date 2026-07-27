import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-mexico-servers');
}

export default function NtoStarMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-mexico-servers" />;
}

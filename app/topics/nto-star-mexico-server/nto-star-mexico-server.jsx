import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-mexico-server');
}

export default function NtoStarMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-mexico-server" />;
}

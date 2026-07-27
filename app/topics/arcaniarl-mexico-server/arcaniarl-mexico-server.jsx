import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-mexico-server');
}

export default function ArcaniarlMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-mexico-server" />;
}

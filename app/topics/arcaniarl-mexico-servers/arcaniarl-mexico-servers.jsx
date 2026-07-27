import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-mexico-servers');
}

export default function ArcaniarlMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-mexico-servers" />;
}

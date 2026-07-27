import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-brazil-servers');
}

export default function ArcaniarlBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-brazil-servers" />;
}

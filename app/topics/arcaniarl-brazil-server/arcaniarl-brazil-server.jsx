import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-brazil-server');
}

export default function ArcaniarlBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-brazil-server" />;
}

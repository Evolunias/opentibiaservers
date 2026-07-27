import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-mexico');
}

export default function ArcaniarlHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-mexico" />;
}

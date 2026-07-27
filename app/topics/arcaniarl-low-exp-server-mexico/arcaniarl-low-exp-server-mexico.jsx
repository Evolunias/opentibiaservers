import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-mexico');
}

export default function ArcaniarlLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-mexico" />;
}

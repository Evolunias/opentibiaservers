import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-high-exp-server');
}

export default function Arcaniarl772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-high-exp-server" />;
}

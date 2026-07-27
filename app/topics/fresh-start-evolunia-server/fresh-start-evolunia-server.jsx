import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-server');
}

export default function FreshStartEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-server" />;
}

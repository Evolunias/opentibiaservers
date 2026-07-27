import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-ots');
}

export default function PopularEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-ots" />;
}

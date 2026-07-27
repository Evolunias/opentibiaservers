import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-ot');
}

export default function PopularEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-ot" />;
}

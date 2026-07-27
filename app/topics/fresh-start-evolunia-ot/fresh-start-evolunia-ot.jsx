import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-ot');
}

export default function FreshStartEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-ot" />;
}

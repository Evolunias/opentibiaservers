import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-ot');
}

export default function TopEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-ot" />;
}

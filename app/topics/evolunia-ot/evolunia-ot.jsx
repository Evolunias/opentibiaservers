import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-ot');
}

export default function EvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="evolunia-ot" />;
}

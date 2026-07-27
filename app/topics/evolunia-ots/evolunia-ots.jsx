import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-ots');
}

export default function EvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-ots" />;
}

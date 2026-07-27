import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia');
}

export default function EvoluniaKeywordPage() {
  return <StaticKeywordPage slug="evolunia" />;
}

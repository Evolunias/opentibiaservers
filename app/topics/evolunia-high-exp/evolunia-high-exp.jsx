import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp');
}

export default function EvoluniaHighExpKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp" />;
}

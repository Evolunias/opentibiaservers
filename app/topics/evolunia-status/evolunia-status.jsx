import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-status');
}

export default function EvoluniaStatusKeywordPage() {
  return <StaticKeywordPage slug="evolunia-status" />;
}

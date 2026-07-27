import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-login');
}

export default function EvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="evolunia-login" />;
}

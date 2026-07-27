import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-reset');
}

export default function EvoluniaResetKeywordPage() {
  return <StaticKeywordPage slug="evolunia-reset" />;
}

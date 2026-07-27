import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-uk');
}

export default function EvoOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-uk" />;
}

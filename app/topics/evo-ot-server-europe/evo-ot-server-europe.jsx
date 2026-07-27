import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-europe');
}

export default function EvoOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-europe');
}

export default function UnlineEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-europe');
}

export default function MediviaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-europe" />;
}

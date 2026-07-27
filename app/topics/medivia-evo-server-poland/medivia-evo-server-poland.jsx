import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-poland');
}

export default function MediviaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-poland" />;
}

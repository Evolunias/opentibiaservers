import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-usa');
}

export default function MediviaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-argentina');
}

export default function MediviaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-servers-brazil');
}

export default function MediviaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-servers-brazil" />;
}

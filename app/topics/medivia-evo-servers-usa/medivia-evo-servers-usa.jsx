import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-servers-usa');
}

export default function MediviaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-servers-usa" />;
}

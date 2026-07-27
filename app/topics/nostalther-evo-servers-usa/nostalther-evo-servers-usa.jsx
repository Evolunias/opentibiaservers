import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-servers-usa');
}

export default function NostaltherEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-servers-usa" />;
}

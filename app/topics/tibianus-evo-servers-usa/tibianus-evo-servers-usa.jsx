import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-servers-usa');
}

export default function TibianusEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-servers-usa" />;
}

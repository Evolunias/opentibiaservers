import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-servers-brazil');
}

export default function TibianusEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-servers-brazil" />;
}

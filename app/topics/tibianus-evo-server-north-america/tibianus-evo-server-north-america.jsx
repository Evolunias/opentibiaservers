import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-north-america');
}

export default function TibianusEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-north-america" />;
}

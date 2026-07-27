import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-enforced-server-latin-america');
}

export default function TibiantisPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-enforced-server-latin-america" />;
}

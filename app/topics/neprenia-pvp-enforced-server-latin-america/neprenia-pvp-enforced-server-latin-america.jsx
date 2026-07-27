import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-latin-america');
}

export default function NepreniaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-latin-america" />;
}

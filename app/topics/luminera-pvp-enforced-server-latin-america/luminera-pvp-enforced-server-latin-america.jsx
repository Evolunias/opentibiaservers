import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-latin-america');
}

export default function LumineraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-latin-america" />;
}

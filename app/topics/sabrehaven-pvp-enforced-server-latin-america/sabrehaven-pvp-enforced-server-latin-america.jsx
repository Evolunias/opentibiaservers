import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-latin-america');
}

export default function SabrehavenPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-latin-america" />;
}

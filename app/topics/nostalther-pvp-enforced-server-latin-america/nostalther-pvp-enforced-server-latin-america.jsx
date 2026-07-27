import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-latin-america');
}

export default function NostaltherPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-latin-america" />;
}

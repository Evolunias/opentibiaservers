import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-north-america');
}

export default function NostaltherPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-france');
}

export default function NostaltherPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-france" />;
}

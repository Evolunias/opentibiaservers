import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-enforced-server-france');
}

export default function NepreniaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-enforced-server-france" />;
}

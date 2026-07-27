import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-france');
}

export default function LumineraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-france" />;
}

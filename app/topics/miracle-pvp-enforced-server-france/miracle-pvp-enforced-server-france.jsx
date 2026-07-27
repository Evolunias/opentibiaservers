import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-enforced-server-france');
}

export default function MiraclePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-enforced-server-france" />;
}

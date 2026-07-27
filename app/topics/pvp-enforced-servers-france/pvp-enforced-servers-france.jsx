import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-france');
}

export default function PvpEnforcedServersFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-france" />;
}

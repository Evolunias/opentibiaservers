import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-france');
}

export default function PvpEnforcedLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-france');
}

export default function PvpLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-france" />;
}

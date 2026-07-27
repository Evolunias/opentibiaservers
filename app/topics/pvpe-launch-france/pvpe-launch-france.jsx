import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-france');
}

export default function PvpeLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-france" />;
}

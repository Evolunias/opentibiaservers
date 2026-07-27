import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-canada');
}

export default function PvpLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-canada" />;
}

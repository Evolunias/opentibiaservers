import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-germany');
}

export default function PvpLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-germany" />;
}

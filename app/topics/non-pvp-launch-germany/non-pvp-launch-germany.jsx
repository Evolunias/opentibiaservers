import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-germany');
}

export default function NonPvpLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-germany" />;
}

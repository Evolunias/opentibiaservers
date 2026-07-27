import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-europe');
}

export default function PvpLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-europe" />;
}

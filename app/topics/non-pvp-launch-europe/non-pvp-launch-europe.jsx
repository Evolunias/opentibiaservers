import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-europe');
}

export default function NonPvpLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-europe" />;
}

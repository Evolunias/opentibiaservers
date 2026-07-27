import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-poland');
}

export default function PvpLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-poland" />;
}

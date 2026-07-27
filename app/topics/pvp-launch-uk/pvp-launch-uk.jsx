import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-uk');
}

export default function PvpLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-uk');
}

export default function NonPvpLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-poland');
}

export default function NonPvpLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-poland" />;
}

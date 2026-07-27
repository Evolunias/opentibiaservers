import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-usa');
}

export default function PvpLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-usa" />;
}

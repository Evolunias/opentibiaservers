import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-brazil');
}

export default function PvpLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-brazil" />;
}

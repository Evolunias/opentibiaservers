import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-mexico');
}

export default function PvpLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-mexico" />;
}

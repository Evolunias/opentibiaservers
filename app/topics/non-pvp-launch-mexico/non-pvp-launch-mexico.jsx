import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-mexico');
}

export default function NonPvpLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-mexico" />;
}

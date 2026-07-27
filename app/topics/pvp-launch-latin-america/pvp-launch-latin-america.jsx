import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-latin-america');
}

export default function PvpLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-latin-america" />;
}

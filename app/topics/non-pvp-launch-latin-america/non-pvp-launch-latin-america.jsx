import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-latin-america');
}

export default function NonPvpLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-latin-america" />;
}

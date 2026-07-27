import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-latin-america');
}

export default function PvpeLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-latin-america" />;
}

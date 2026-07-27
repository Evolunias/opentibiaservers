import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-north-america');
}

export default function ArcaniarlLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-north-america" />;
}

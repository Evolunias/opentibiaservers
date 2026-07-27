import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-north-america');
}

export default function ArcaniarlHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-north-america" />;
}

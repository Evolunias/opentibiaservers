import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-south-america');
}

export default function ArcaniarlHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-south-america');
}

export default function ArcaniarlLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-south-america" />;
}

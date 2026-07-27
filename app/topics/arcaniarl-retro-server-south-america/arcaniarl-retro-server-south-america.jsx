import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-south-america');
}

export default function ArcaniarlRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-south-america" />;
}

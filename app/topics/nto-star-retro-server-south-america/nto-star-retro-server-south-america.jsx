import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-south-america');
}

export default function NtoStarRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-south-america');
}

export default function TibijkaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-south-america" />;
}

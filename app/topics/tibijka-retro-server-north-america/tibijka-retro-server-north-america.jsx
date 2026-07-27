import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-north-america');
}

export default function TibijkaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-north-america" />;
}

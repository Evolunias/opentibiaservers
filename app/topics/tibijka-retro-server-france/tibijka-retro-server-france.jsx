import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-france');
}

export default function TibijkaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-france" />;
}

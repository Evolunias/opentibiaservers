import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-france');
}

export default function OlderaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-france" />;
}

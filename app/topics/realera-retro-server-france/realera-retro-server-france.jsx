import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-france');
}

export default function RealeraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-france" />;
}

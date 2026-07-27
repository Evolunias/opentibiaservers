import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-canada');
}

export default function RealeraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-canada" />;
}

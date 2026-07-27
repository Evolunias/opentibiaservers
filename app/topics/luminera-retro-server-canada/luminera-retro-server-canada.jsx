import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-canada');
}

export default function LumineraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-canada" />;
}

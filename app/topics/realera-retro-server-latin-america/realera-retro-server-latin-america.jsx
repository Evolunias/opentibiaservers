import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-latin-america');
}

export default function RealeraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-latin-america" />;
}

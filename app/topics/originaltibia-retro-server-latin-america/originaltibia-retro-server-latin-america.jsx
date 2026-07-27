import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-latin-america');
}

export default function OriginaltibiaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-latin-america" />;
}

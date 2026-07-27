import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-latin-america');
}

export default function TibianusRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-latin-america" />;
}

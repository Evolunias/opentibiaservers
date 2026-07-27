import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-latin-america');
}

export default function LumineraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-latin-america" />;
}

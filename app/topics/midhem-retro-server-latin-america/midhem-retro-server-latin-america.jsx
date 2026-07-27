import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-latin-america');
}

export default function MidhemRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-latin-america" />;
}

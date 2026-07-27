import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-latin-america');
}

export default function RealestaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-latin-america" />;
}

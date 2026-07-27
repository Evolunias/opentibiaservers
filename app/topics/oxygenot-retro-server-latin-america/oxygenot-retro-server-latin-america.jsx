import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-latin-america');
}

export default function OxygenotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-latin-america" />;
}

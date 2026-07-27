import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-latin-america');
}

export default function NostaltherRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-latin-america" />;
}

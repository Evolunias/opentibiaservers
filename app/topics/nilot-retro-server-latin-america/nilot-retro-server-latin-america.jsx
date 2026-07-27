import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-latin-america');
}

export default function NilotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-latin-america" />;
}

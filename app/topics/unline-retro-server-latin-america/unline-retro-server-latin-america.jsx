import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-latin-america');
}

export default function UnlineRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-latin-america" />;
}

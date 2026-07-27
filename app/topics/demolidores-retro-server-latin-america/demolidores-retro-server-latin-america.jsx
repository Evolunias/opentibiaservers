import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-latin-america');
}

export default function DemolidoresRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-latin-america" />;
}

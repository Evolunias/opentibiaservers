import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-latin-america');
}

export default function RealeraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-latin-america" />;
}

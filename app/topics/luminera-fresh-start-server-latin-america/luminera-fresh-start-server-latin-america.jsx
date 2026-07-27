import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-latin-america');
}

export default function LumineraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-latin-america" />;
}

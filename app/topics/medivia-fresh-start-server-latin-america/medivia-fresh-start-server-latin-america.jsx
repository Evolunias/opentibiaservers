import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-latin-america');
}

export default function MediviaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-latin-america" />;
}

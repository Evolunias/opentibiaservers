import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-ot');
}

export default function CurrentKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-ot" />;
}

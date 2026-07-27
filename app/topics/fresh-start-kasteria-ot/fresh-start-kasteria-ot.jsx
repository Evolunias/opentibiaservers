import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-ot');
}

export default function FreshStartKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-ot" />;
}

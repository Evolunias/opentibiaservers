import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-ots');
}

export default function FreshStartKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-ots" />;
}

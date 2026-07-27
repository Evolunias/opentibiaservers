import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-ots');
}

export default function FreshStartNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-ots');
}

export default function TopNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-ots" />;
}

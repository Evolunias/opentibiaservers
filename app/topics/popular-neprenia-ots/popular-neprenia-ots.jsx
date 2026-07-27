import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-ots');
}

export default function PopularNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-ots" />;
}

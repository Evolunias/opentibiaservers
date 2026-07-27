import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-ot');
}

export default function TopNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-ot');
}

export default function FreshStartNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-ot" />;
}

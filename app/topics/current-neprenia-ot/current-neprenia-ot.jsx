import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-ot');
}

export default function CurrentNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-ot" />;
}

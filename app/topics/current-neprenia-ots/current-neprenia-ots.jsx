import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-ots');
}

export default function CurrentNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-ots" />;
}

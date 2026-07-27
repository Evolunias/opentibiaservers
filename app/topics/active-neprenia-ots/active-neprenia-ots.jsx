import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-ots');
}

export default function ActiveNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-ots" />;
}

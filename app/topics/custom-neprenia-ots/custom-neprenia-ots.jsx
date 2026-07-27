import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-ots');
}

export default function CustomNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-ots" />;
}

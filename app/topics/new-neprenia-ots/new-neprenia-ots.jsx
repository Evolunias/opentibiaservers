import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-ots');
}

export default function NewNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-ots" />;
}

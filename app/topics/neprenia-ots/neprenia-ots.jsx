import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-ots');
}

export default function NepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-ots" />;
}

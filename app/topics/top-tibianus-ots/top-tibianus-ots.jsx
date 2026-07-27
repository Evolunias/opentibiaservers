import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-ots');
}

export default function TopTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-ots');
}

export default function TopTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-ots" />;
}

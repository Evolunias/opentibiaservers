import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-ots');
}

export default function ActiveTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-ots');
}

export default function CustomTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-ots" />;
}

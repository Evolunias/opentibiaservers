import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-ots');
}

export default function TibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-ots" />;
}

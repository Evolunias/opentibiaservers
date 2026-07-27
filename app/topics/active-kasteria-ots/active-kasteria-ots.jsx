import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-ots');
}

export default function ActiveKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-ots" />;
}

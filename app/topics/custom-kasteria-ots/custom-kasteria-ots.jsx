import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-ots');
}

export default function CustomKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-ots" />;
}

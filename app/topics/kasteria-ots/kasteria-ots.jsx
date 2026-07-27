import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-ots');
}

export default function KasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-ots" />;
}

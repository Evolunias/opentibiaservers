import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-ots');
}

export default function OfficialKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-ots" />;
}

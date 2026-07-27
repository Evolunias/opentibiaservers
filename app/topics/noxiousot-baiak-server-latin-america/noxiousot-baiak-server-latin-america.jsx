import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-latin-america');
}

export default function NoxiousotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-latin-america" />;
}

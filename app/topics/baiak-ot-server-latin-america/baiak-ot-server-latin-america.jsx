import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-latin-america');
}

export default function BaiakOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-latin-america" />;
}

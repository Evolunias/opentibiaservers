import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-latin-america');
}

export default function MiracleBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-latin-america" />;
}

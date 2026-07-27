import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-latin-america');
}

export default function LumineraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-latin-america');
}

export default function ArchlightHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-latin-america" />;
}

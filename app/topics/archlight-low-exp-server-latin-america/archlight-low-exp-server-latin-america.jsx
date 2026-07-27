import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-latin-america');
}

export default function ArchlightLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-latin-america" />;
}

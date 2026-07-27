import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-latin-america');
}

export default function ArchlightFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-mexico');
}

export default function ArchlightFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-mexico" />;
}

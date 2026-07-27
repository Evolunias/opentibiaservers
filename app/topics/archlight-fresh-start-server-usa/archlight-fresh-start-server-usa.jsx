import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-usa');
}

export default function ArchlightFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-usa" />;
}

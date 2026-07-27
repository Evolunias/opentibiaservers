import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-uk');
}

export default function ArchlightFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-europe');
}

export default function ArchlightFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-europe" />;
}

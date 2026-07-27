import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-poland');
}

export default function ArchlightFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-poland" />;
}

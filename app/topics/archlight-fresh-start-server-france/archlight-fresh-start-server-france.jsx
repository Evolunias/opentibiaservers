import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-france');
}

export default function ArchlightFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-france" />;
}

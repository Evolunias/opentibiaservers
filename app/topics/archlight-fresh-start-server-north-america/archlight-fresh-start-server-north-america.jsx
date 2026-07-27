import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-north-america');
}

export default function ArchlightFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-north-america" />;
}

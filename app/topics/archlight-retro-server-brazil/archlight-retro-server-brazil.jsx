import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-brazil');
}

export default function ArchlightRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-brazil" />;
}

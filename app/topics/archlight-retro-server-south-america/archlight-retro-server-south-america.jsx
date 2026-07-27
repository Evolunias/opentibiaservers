import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-south-america');
}

export default function ArchlightRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-south-america" />;
}

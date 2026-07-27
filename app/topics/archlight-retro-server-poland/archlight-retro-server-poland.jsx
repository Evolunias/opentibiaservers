import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-poland');
}

export default function ArchlightRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-poland" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-argentina');
}

export default function ArchlightLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-argentina" />;
}

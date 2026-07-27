import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-germany');
}

export default function ArchlightLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-germany" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-germany');
}

export default function ArchlightHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-germany" />;
}

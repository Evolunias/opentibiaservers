import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp-server-south-america');
}

export default function ArchlightHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp-server-south-america" />;
}

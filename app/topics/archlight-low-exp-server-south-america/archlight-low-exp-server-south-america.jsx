import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-south-america');
}

export default function ArchlightLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-south-america" />;
}

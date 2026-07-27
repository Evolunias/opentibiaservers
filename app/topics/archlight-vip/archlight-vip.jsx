import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-vip');
}

export default function ArchlightVipKeywordPage() {
  return <StaticKeywordPage slug="archlight-vip" />;
}

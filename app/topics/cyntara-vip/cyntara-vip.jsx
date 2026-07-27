import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-vip');
}

export default function CyntaraVipKeywordPage() {
  return <StaticKeywordPage slug="cyntara-vip" />;
}

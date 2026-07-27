import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-vip');
}

export default function InfernalOtVipKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-vip" />;
}

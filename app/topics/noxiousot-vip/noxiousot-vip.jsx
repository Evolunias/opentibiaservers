import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-vip');
}

export default function NoxiousotVipKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-vip" />;
}

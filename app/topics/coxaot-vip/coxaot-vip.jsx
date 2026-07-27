import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-vip');
}

export default function CoxaotVipKeywordPage() {
  return <StaticKeywordPage slug="coxaot-vip" />;
}
